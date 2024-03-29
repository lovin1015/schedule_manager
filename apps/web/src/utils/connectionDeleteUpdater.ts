import { RecordSourceProxy, ConnectionHandler } from 'relay-runtime'

interface ConnectionDeleteEdgeUpdaterArgs {
  parentId: string
  connectionName: string
  nodeId: string
  store: RecordSourceProxy
}

const connectionDeleteUpdater = ({
  parentId,
  connectionName,
  nodeId,
  store,
}: ConnectionDeleteEdgeUpdaterArgs) => {
  const parentProxy = store.get(parentId)

  if (!parentProxy) {
    return
  }

  const conn = ConnectionHandler.getConnection(parentProxy, connectionName)

  if (!conn) {
    return
  }

  ConnectionHandler.deleteNode(conn, nodeId)
}

export { connectionDeleteUpdater }
