module.exports = {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: 'https://api.deezer.com/'
    }
}