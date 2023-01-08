import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingOffice2 as BuildingOffice2Svelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BuildingOffice2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingOffice2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice2: Story = {}
