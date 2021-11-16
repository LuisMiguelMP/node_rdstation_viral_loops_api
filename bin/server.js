const app = require('../src/app')
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => console.log(`🚀 Server running on port`, app.get('port')))

