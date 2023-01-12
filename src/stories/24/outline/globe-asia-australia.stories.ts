import type { Meta, StoryObj } from '@storybook/svelte'
import { GlobeAsiaAustralia as GlobeAsiaAustraliaSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: GlobeAsiaAustraliaSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GlobeAsiaAustraliaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAsiaAustralia: Story = {}
