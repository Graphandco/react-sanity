import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"7i4llgs5",
    dataset: "production",
    useCdn: true
})