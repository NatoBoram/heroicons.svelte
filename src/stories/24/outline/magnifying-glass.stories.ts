import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlass as MagnifyingGlassSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MagnifyingGlassSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlass: Story = {}