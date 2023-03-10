import type { Meta, StoryObj } from '@storybook/svelte'
import SunSvelte from '../../../lib/20/solid/sun.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SunSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
