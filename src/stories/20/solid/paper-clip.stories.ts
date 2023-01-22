import type { Meta, StoryObj } from '@storybook/svelte'
import PaperClipSvelte from '../../../lib/20/solid/paper-clip.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PaperClipSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PaperClipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperClip: Story = {}
