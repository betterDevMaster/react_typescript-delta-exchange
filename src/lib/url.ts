import {ExtendRecursively} from 'lib/type-utils'

export type Routes = {
    [key: string]: string | Routes
}

/**
 * Helper that automatically converts a JSON object
 * into route URLs with prependended parent
 * namespaces.
 *
 * @param routes
 * @param namespace
 */
export function createRoutes<T extends Routes>(routes: T, namespace?: string): ExtendRecursively<T, {root: string}> {
    const childRoutes = Object.entries(routes).reduce((acc, [key, val]) => {
        if (typeof val === 'string') {
            const prependedVal = namespace ? `/${namespace}${val}` : val
            acc[key] = prependedVal
            return acc
        }

        const prependedKey = namespace ? `${namespace}/${key}` : key
        acc[key] = createRoutes(val, prependedKey)

        return acc
    }, {} as any)

    // append root
    childRoutes.root = namespace ? `/${namespace}` : '/'

    return childRoutes
}
