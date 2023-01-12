import type { Meta, StoryObj } from '@storybook/svelte'
import { Film as FilmSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FilmSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FilmSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Film: Story = {}
