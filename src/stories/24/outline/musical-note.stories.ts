import type { Meta, StoryObj } from '@storybook/svelte'
import { MusicalNote as MusicalNoteSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MusicalNoteSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MusicalNoteSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MusicalNote: Story = {}
