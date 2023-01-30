@REM Lanzado desde la raíz del proyecto para que funcione la ruta relativa

@echo off 
set "nombres=alpine bullseye-slim buster-slim baseimage almalinux almalinux-minimal ubuntu fedora"
@REM alpine bullseye-slim buster-slim baseimage almalinux almalinux-minimal clearlinux ubuntu fedora photon cirros distroless"
(for %%a in (%nombres%) do ( 
   docker build -f docs/dockerfiles/Dockerfile.%%a -t %%a .
))

FOR /F "usebackq tokens=*" %%I IN (`docker ps -aq`) DO docker rm -f %%I
FOR /F "usebackq tokens=*" %%I IN (`docker images -f "dangling=true" -q`) DO docker rmi -f %%I
(for %%a in (%nombres%) do (
   docker run -d  -v %cd%:/app/test:ro --name %%a -t %%a
))

docker images --format "{{.Repository}}\t{{.VirtualSize}}" | sort
timeout /t 30 /nobreak
docker stats --no-stream --format "{{.Name}}\t{{.MemUsage}}"