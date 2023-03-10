import type { Meta, StoryObj } from '@storybook/svelte'
import IdentificationSvelte from '../../../lib/20/solid/identification.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: IdentificationSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<IdentificationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Identification: Story = {}
