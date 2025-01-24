<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SlashSvelte from '../../../lib/16/solid/slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SlashSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Slash" />
