import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingLibrarySvelte from '../../../lib/16/solid/building-library.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BuildingLibrarySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BuildingLibrarySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingLibrary: Story = {}
