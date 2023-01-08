import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingOffice2 as BuildingOffice2Svelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BuildingOffice2Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingOffice2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice2: Story = {}
