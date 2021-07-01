FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5000
EXPOSE 5001
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
FROM build AS publish
RUN dotnet publish "five-ways-to-wellbeing-web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "five-ways-to-wellbeing-web.dll"]
