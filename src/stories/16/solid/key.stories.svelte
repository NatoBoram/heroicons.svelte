<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import KeySvelte from '../../../lib/16/solid/key.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: KeySvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Key" />
