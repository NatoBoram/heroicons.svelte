import type { Meta, StoryObj } from '@storybook/svelte'
import GlobeAsiaAustraliaSvelte from '../../../lib/20/solid/globe-asia-australia.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: GlobeAsiaAustraliaSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GlobeAsiaAustraliaSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GlobeAsiaAustralia: Story = {}
