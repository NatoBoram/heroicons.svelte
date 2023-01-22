import type { Meta, StoryObj } from '@storybook/svelte'
import FilmSvelte from '../../../lib/24/outline/film.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FilmSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FilmSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Film: Story = {}
