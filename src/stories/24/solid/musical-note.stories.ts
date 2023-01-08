import type { Meta, StoryObj } from '@storybook/svelte'
import { MusicalNote as MusicalNoteSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: MusicalNoteSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MusicalNoteSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MusicalNote: Story = {}
