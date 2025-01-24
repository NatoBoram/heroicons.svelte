<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/24/outline/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EyeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Eye" />
