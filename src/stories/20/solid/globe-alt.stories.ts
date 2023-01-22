import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAltSvelte from '../../../lib/20/solid/globe-alt.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: GlobeAltSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GlobeAltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAlt: Story = {}
