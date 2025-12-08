FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN su vscode -c "curl -s https://ohmyposh.dev/install.sh | bash"

RUN su vscode -c "curl -fsSL https://fnm.vercel.app/install | bash"

COPY .devcontainer/theme.omp.json /usr/local/share/theme.omp.json
COPY .devcontainer/docker-init.sh /usr/local/share/docker-init.sh