FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["ZemisApi/ZemisApi.csproj", "ZemisApi/"]
RUN dotnet restore "ZemisApi/ZemisApi.csproj"
COPY . .
WORKDIR "/src/ZemisApi"
RUN dotnet build "ZemisApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ZemisApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ZemisApi.dll"]
