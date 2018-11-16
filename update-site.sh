echo "🌎 Releasing to the world..."
rm -rf dist/*
echo "💻 Building App"
ng build --prod --base-href="https://bendalton.github.io/speed-math-angular/"
mv dist/CalebMath/* dist/.
echo "📲 Publishing to Github"
ngh
echo "View the updated site soon (10 minutes?) here: https://bendalton.github.io/speed-math-angular/"