import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingLibrary as BuildingLibrarySvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BuildingLibrarySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingLibrarySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingLibrary: Story = {}
