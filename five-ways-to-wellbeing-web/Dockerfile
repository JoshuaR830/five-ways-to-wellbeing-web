FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app

ENV ASPNETCORE_URLS http://+:80;https://+:443

EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src

# Restore nuget
COPY *.csproj .
RUN dotnet restore

# Copy source code
COPY . .

# Build
RUN dotnet build -c Release -o /app

FROM build AS publish

RUN dotnet publish -c Release -o /app

FROM base AS final