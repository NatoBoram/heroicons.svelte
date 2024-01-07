import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingOffice2Svelte from '../../../lib/16/solid/building-office-2.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BuildingOffice2Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BuildingOffice2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice2: Story = {}
