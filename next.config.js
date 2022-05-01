// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// }

module.exports = {
  env: {
    NEXT_PUBLIC_API:'https://api-bwa-storegg.herokuapp.com',
    NEXT_PUBLIC_IMAGE:'https://api-bwa-storegg.herokuapp.com/uploads/'
  },
  images:{
    domains:['api-bwa-storegg.herokuapp.com']
  }
  
}
