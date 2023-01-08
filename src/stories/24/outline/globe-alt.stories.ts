import type { Meta, StoryObj } from '@storybook/svelte'
import { GlobeAlt as GlobeAltSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: GlobeAltSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeAltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAlt: Story = {}
