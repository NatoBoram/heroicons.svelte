<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/24/outline/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EyeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Eye" />
