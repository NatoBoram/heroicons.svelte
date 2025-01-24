<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import KeySvelte from '../../../lib/20/solid/key.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: KeySvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Key" />
