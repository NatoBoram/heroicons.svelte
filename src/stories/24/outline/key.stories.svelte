<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import KeySvelte from '../../../lib/24/outline/key.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: KeySvelte,
		args: { class: '' },
	})
</script>

<Story name="Key" />
