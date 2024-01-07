import type { Meta, StoryObj } from '@storybook/svelte'
import IdentificationSvelte from '../../../lib/16/solid/identification.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: IdentificationSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<IdentificationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Identification: Story = {}
