rm -rf dist/*
ng build --prod --base-href="https://bendalton.github.io/speed-math-angular/"
mv dist/CalebMath/* dist/.
ngh