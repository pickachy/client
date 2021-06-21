FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build

WORKDIR /src
COPY . /src

RUN dotnet restore ZemisApi.Web/ZemisApi.Web.csproj
RUN dotnet publish --configuration Release --output /out --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR /app
COPY --from=build /out .

EXPOSE 80

ENTRYPOINT dotnet ZemisApi.Web.dll

