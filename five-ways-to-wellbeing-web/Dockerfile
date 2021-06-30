FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["five-ways-to-wellbeing-web/five-ways-to-wellbeing-web.csproj", "five-ways-to-wellbeing-web/"]
RUN dotnet restore "five-ways-to-wellbeing-web/five-ways-to-wellbeing-web.csproj"
COPY . .
WORKDIR "/src/five-ways-to-wellbeing-web"
RUN dotnet build "five-ways-to-wellbeing-web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "five-ways-to-wellbeing-web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "five-ways-to-wellbeing-web.dll"]
