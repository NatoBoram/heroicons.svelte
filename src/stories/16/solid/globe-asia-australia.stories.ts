import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAsiaAustraliaSvelte from '../../../lib/16/solid/globe-asia-australia.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GlobeAsiaAustraliaSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GlobeAsiaAustraliaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAsiaAustralia: Story = {}
