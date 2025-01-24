<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SlashSvelte from '../../../lib/24/solid/slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Slash" />
