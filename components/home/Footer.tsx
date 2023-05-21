import { FC } from 'react'
import { Text, Box, Flex, Anchor, Button } from '../primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

type SectionTitleProps = {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
    {title}
  </Text>
)

type SectionLinkProps = {
  name: string
  href: string
}

const SectionLink: FC<SectionLinkProps> = ({ name, href }) => (
  <Anchor
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    weight="medium"
    css={{ fontSize: 14, mt: 16 }}
  >
    {name}
  </Anchor>
)

const developerSectionLinks = [
  {
    name: 'Docs',
    href: 'https://https://docs.nftearth.exchange',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NFTEarth',
  },
  {
    name: 'NFTE Token',
    href: 'https://www.coingecko.com/en/coins/nftearth',
  },
]

const companySectionLinks = [
  {
    name: 'Brand Assets',
    href: 'https://docs.nftearth.exchange/resources/brand-assets',
  },
  {
    name: 'Terms',
    href: 'https://nftearth.exchange/terms',
  },
  {
    name: 'Privacy',
    href: 'https://nftearth.exchange/privacy',
  },
]

export const Footer = () => {
  return (
    <Flex
      justify="between"
      css={{
        borderTop: '1px solid $gray7',
        borderStyle: 'solid',
        pt: '$5',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        '@bp600': {
          flexDirection: 'row',
          gap: 0,
        },
      }}
    >
      <Flex css={{ gap: 80, '@bp600': { gap: 136 } }}>
        <Flex direction="column">
          <SectionTitle title="Developers" />
          {developerSectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
        <Flex direction="column">
          <SectionTitle title="Protocol" />
          {companySectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        css={{ alignItems: 'flex-start', '@bp600': { alignItems: 'flex-end' } }}
      >
        <SectionTitle title="Community" />
        <Flex css={{ gap: '$4', mt: 16 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nftearth_l2"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/nftearth"
            aria-label="Discord"
          >
            <Button
              size="xs"
              color="gray3"
              css={{
                '&:hover': {
                  background: '$gray10',
                },
              }}
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} width={14} height={14} />
            </Button>
          </a>
        </Flex>
        </Flex>
      </Flex>
  )
}
