if (Test-Path build) { Remove-Item -Path build -Recurse }
tsc
npm run test