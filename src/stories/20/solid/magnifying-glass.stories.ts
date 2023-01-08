import type { Meta, StoryObj } from '@storybook/svelte'
import { MagnifyingGlass as MagnifyingGlassSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MagnifyingGlassSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MagnifyingGlass: Story = {}
