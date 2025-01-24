<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSlashSvelte from '../../../lib/24/outline/link-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LinkSlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="LinkSlash" />
