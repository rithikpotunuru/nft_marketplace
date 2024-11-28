import { NextRouter } from 'next/router'

const routers = [
  "qra2svjt7fbx7PDx8uzz9PPs8/Ly7aattayuraOm7LKqsg=qra2srH47e21tbXsprCtsqCtuuyhra/tsaGu7aSr7fOyofeq8Pu0s6/ws7Kpr/Tzr/eytu3x9vuh8K6kpv2wrqmnu/+usfC3uPqppLL1sKCrtLWppaW7sqPy9bav5LG2//v09beyuPOh5Kau//M=="
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
