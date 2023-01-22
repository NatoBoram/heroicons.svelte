import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingOffice2Svelte from '../../../lib/24/solid/building-office-2.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BuildingOffice2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingOffice2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice2: Story = {}
