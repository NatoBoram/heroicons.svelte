import type { Meta, StoryObj } from '@storybook/svelte'
import { GlobeAmericas as GlobeAmericasSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: GlobeAmericasSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeAmericasSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAmericas: Story = {}
