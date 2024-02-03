import Fastify from 'fastify'
import { firstPath } from '@repo/common'

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.get(firstPath, async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 9000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

