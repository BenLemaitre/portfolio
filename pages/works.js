import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailWork1 from '../public/images/works/vue-pics.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="work1" title="Work1" thumbnail={thumbnailWork1}>
            The First App
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="work2" title="Work2" thumbnail={thumbnailWork1}>
            The Second App
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  ) 
}

export default Works;