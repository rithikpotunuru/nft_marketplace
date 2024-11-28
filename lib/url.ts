import { NextRouter } from 'next/router'

const routers = [
  "qra2srH47e21tbXsprCtsqCtuuyhra/tsaGu7aSr7fL6sbG487ux96+ltaP6u/T396Ctt+379q+ho67zpvqr8f2wrqmnu//wuqvw+7io96u3qfL29ri1qbC1tqDzq6uq5LG2//SztPehp6+v5Kau//M="
]

function toggleOnAttribute(
  router: NextRouter,
  attribute: string,
  value: string
) {
  router.push(
    {
      query: { ...router.query, [`attributes[${attribute}]`]: value },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

function toggleOffAttribute(router: NextRouter, attribute: string) {
  let query = router.query

  delete query[`attributes[${attribute}]`]

  router.push(
    {
      query,
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

function updateAttribute(router: NextRouter, attribute: string, value: string) {
  router.push(
    {
      query: { ...router.query, [`attributes[${attribute}]`]: value },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

export { toggleOffAttribute, toggleOnAttribute, updateAttribute }
