import type { Meta, StoryObj } from '@storybook/svelte'
import { GlobeAlt as GlobeAltSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: GlobeAltSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GlobeAltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAlt: Story = {}
