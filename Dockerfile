FROM ubuntu:kinetic AS build
ENV YARN_VERSION=1.22.19

RUN apt-get update \
    && apt-get install curl -y \
    && curl -fsSL https://deb.nodesource.com/setup_19.x | bash - \
    && apt-get install --no-install-recommends nodejs -y\
    && apt-get autoremove \
    && apt-get clean \
    && npm uninstall -g npm \
    && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && rm -rf $(find / | grep npm) \
    $(find / | grep node_modules) \
    yarn-v$YARN_VERSION.tar.gz \
    /var/lib/apt/lists/* /var/cache/ldconfig /var/cache/debconf 


FROM ubuntu:kinetic
WORKDIR /app/test
ENV YARN_VERSION=1.22.19

COPY --from=build /opt/yarn-v$YARN_VERSION/ /opt/yarn-v$YARN_VERSION/

RUN  ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && groupadd --gid 1000 node \
    && useradd --uid 1000 --gid node --create-home node

COPY --from=build /usr/bin/node /usr/bin/node

USER node

ENTRYPOINT [ "yarn", "test" ]