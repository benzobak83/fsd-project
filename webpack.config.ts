import { BuildEnv, BuildPaths } from './config/build/types/config'
import { buildwebpackConfig } from './config/build/buildWebpackConfig'
import path from 'path'
import webpack from 'webpack'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const idDev = mode === 'development'

  const config: webpack.Configuration = buildwebpackConfig({
    mode: mode,
    paths: paths,
    isDev: idDev,
    port: PORT
  })
  return config
}
